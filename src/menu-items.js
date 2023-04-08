 export default  {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                },
                {
                    id: 'menu-level',
                    title: 'Events',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Create Event',
                            type: 'item',
                            url: '/event/create',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'List Event',
                            type: 'item',
                            url: '/event/list',
                        },
                        
                    
                    ]
                }
                
            ]
        },
       

    ]
}

