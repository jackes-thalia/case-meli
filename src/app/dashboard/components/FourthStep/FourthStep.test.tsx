import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FourthStep from './FourthStep'
import MockDashboardContext, {
  mockIssueData,
} from '@/mock/MockDashboardContext'
import { StepProvider } from '@/presentation/providers/StepProvider'

const component = () => (
  <StepProvider>
    <MockDashboardContext>
      <FourthStep />
    </MockDashboardContext>
  </StepProvider>
)

describe('dashboard/FourthStep', () => {
  it('must load all distributionCenterData fields from context', async () => {
    const { getByTestId } = render(component())
    const fields = [
      { name: 'name', value: `Centro de distribuição ${mockIssueData.city}` },
      { name: 'cep', value: mockIssueData.cep },
      { name: 'address', value: mockIssueData.address },
      { name: 'city', value: mockIssueData.city },
      { name: 'state', value: mockIssueData.state },
    ]
    fields.forEach(({ name, value }) => {
      expect(getByTestId(`distributionCenterData-${name}`).innerHTML).toEqual(
        value,
      )
    })
  })
})
