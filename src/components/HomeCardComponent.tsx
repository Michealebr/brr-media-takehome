import React from 'react'

interface homeCardProps {
    subheading: string;
    number: string
}

const HomeCardComponent: React.FC<homeCardProps> = ({subheading, number}) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
    <h2 className="text-lg font-semibold">{subheading}</h2>
    <p className="text-3xl font-bold text-[var(--text-color)]">{number}</p>
  </div>
  )
}

export default HomeCardComponent