import { useUser } from '@clerk/clerk-react'

export const Dashboard = () => {
 return (
  <div className="dashboard-container">
   <h1>Welcome {useUser} Here Are Your Finances!</h1>
  </div>
 )
}