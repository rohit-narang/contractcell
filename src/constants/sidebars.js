
export const contractSidebar = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard/home'
    },
    {
      title: 'Contracts',
      icon: 'tasks',
      items: [
        {
          name: 'Contract List',
          type: 'link',
          route: '/dashboard/contracts'
        },
        { name: 'Add New Contract', modalName: 'AddNewContract' }
      ]
    }
  ];
  