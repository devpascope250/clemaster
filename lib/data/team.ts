export interface TeamMember {
  id: string
  name: string
  position: string
  email?: string
  phone?: string
  linkedin?: string
  image?: string
  bio?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jiang Liwei',
    position: 'Chair Person',
  },
  {
    id: '2',
    name: 'Liu Yanfeng',
    position: 'General Manager',
  },
  {
    id: '3',
    name: 'Zhang Jinfeng',
    position: 'Logistics & Supply Chain',
  },{
    id: '14',
    name: 'Mr Tang',
    position: 'Engineering Construction Department:',
  },
  {
    id: '4',
    name: 'KAMANA Claude',
    position: 'Supply Chain Assistant',
  },
  {
    id: '5',
    name: 'Zhai Lubing',
    position: 'Sales Manager',
  },{
    id: '6',
    name: 'UWAMAHORO Alphonsine',
    position: 'Sales Manager assistant',
  },
  {
    id: '7',
    name: 'Xiang Wu',
    position: 'Marketing Manager',
  },
  {
    id: '8',
    name: 'Xu manchu',
    position: 'Finance Manager',
  }
  ,{
    id: '9',
    name: 'TUMUKUNDE Blandine',
    position: 'Finance Assistant',
  },{
    id: '10',
    name: 'NIYIGENA Jeanne Baptiste',
    position: 'HR Department',
  },
  {
    id: '11',
    name: 'Ye Shunsong',
    position: 'Factory Manager',
  },
  {
    id: '12',
    name: 'Chai pei zhao',
    position: 'Warehouse Manager',
  },
  {
    id: '13',
    name: 'DUKUNDIMANA Enock',
    position: 'Warehouse assistants',
  }
]
