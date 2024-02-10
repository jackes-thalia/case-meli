'use client'
import MainTemplate from '@/presentation/container/MainTemplate'
import Card from '@/presentation/components/Card/Card'

export const Home = () => {
  return (
    <MainTemplate>
      <Card>
        <h2>Agora, Informe o token que enviamos para o seu e-mail</h2>
        <label>Digite o token:</label>
      </Card>
    </MainTemplate>
  )
}

export default Home
