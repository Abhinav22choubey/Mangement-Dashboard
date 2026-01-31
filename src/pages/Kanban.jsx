import React from 'react'
import KanbanHeader from '../components/kanban/KanbanHeader'
import KanbanMain from '../components/kanban/KanbanMain'
function Kanban() {
  return (
    <div  className='relative left-3 max-w-[82vw] w-[100%]  flex flex-col '>
      <KanbanHeader />
      <KanbanMain/>
    </div>
  )
}

export default Kanban
