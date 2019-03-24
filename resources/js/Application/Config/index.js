export default {
    global_variable: 'expedio',
    initializeArray: [
        'expedioClick'
    ],
    pages: [
        {
            id:'#expedio_experience',
            config: {
                position: 'left',
            }
        },
        {
            id:'#expedio_activate',
            config: {
                position: 'top' 
            }
        },
        {
            id:'#expedio_engage',
            config: {
                position: 'bottom'
            }
        }
    ],
    navButtons: [
        {
            selector: '.navbtn-top',
            config:{
                target:'activate',
                direction:'top'   
            }
        },
        {
            selector: '.navbtn-left',
            config:{
                target: 'experience'  ,
                direction:'left'   

            }
        },
        {
            selector: '.navbtn-bottom',
            config:{
                target: 'engage'  ,
                direction:'bottom'   
            }
        },
    ]
}