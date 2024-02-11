'use client'

import React from 'react'

export type IssueData = {
  name: string
  cep: string
  address: string
  city: string
  state: string
  neighborhood: string
  title: string
  complement: string
  startDate: string
  endDate?: string
  files: File[]
  comments: string
  description: string
}

export type DashboardProviderData = {
  issueData: IssueData
  setIssueData: React.Dispatch<React.SetStateAction<IssueData>>
  addIssueDataFields: (fields: Partial<IssueData>) => void
}

export const DashboardContext = React.createContext<DashboardProviderData>(
  {} as DashboardProviderData,
)

const defaultIssueData: IssueData = {
  name: '',
  cep: '',
  address: '',
  city: '',
  state: '',
  complement: '',
  neighborhood: '',
  title: '',
  startDate: '',
  files: [],
  comments: '',
  description: '',
}

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [issueData, setIssueData] = React.useState<IssueData>(defaultIssueData)

  const addIssueDataFields = (fields: Partial<IssueData>) => {
    setIssueData((currentIssueData) => {
      return {
        ...currentIssueData,
        ...fields,
      }
    })
  }

  const value = {
    issueData,
    setIssueData,
    addIssueDataFields,
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
