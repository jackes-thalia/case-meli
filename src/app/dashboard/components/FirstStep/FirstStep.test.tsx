import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FirtStep from './FirstStep'
import MockDashboardContext from '@/mock/MockDashboardContext'
import { StepProvider } from '@/presentation/providers/StepProvider'

const component = () => (
  <StepProvider>
    <MockDashboardContext>
      <FirtStep />
    </MockDashboardContext>
  </StepProvider>
)

jest.mock('@/service/issueService', () => {
  const mockCorreio = {
    cep: '00000000',
    logradouro: 'Rua teste 1',
    complemento: '',
    bairro: 'Centro',
    localidade: 'Osasco',
    uf: 'SP',
    ibge: '3534401',
    gia: '4923',
    ddd: '11',
    siafi: '6789',
  }
  return {
    getByCep: () => Promise.resolve(mockCorreio),
  }
})

describe('dashboard/FirstStep', () => {
  it('the mask field must break when 7 digits cep', async () => {
    const { getByTestId, getByText, baseElement, getByRole } =
      render(component())

    const inputCep = getByTestId('input-cep') as HTMLInputElement
    expect(inputCep).toBeInTheDocument()

    await userEvent.type(inputCep, '0000000')
    await userEvent.click(baseElement)

    await waitFor(() => {
      expect(inputCep.value).toBe('00000-00')
      const errorLabel = getByText('O campo deve ter 8 números')
      expect(errorLabel).toBeInTheDocument()
      const submitButton = getByRole('button', { name: 'Buscar' })
      expect(submitButton).toBeDisabled()
    })
  })
  it('the button must enable if cep correct', async () => {
    const { getByTestId, baseElement, getByRole } = render(component())

    const inputCep = getByTestId('input-cep') as HTMLInputElement
    expect(inputCep).toBeInTheDocument()

    await userEvent.type(inputCep, '00000000')
    await userEvent.click(baseElement)

    await waitFor(() => {
      expect(inputCep.value).toBe('00000-000')
      const submitButton = getByRole('button', { name: 'Buscar' })
      expect(submitButton).toBeEnabled()
    })
  })
  it('the button must submit form', async () => {
    const { getByTestId, baseElement, getByRole, getByText } =
      render(component())

    const inputCep = getByTestId('input-cep') as HTMLInputElement
    expect(inputCep).toBeInTheDocument()

    await userEvent.type(inputCep, '00000000')
    await userEvent.click(baseElement)

    await waitFor(() => {
      expect(inputCep.value).toBe('00000-000')
    })
    const submitButton = getByRole('button', { name: 'Buscar' })
    await userEvent.click(submitButton)
    await waitFor(() => {
      const errorLabel = getByText('Centro de distribuição Osasco')
      expect(errorLabel).toBeInTheDocument()
    })
  })
})
