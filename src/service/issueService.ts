import { IssueData } from '@/presentation/providers/DashboardProvider'
import axios from 'axios'

export interface IGetByCepProps {
  bairro: string
  cep: string
  complemento: string
  localidade: string
  logradouro: string
  uf: string
  erro?: boolean
}

const issueService = {
  getByCep: (cep: string): Promise<IGetByCepProps> => {
    return axios
      .get<IGetByCepProps>(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({ data }) => data)
  },
  sendIssue: (issueData: IssueData): Promise<boolean> => {
    console.log('Send', issueData)
    return Promise.resolve(true)
  },
}

export default issueService
