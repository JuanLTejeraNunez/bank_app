import React from 'react'

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
  {/* Doughnut Chart */}

        </div>

        <div  className="flex flex-col gap-6">
            <h2 className="header-2">
            Banks Accounts : {totalBanks}
            </h2>
        </div>
    </section>
  )
}

export default TotalBalanceBox