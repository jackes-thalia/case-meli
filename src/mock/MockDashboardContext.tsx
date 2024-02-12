import {
  DashboardContext,
  DashboardProviderData,
} from '@/presentation/providers/DashboardProvider'

export const mockIssueData = {
  name: 'Thalia',
  cep: '00000000',
  address: 'Rua teste 1',
  city: 'Osasco',
  state: 'SP',
  neighborhood: 'Centro',
  title: 'Titulo teste',
  complement: 'fundos',
  startDate: '11-02-2024',
  endDate: '12-02-2024',
  files: [],
  comments: 'Teste comments',
  description: 'Teste description',
}

export const mockDashboardContext: DashboardProviderData = {
  addIssueDataFields: jest.fn(),
  issueData: mockIssueData,
  setIssueData: jest.fn(),
}

const MockDashboardContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardContext.Provider value={mockDashboardContext}>
      {children}
    </DashboardContext.Provider>
  )
}

export default MockDashboardContext
