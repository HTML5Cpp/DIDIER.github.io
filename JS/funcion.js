let tabs = document.querySelectorAll('.info-selector')
let infos = document.querySelectorAll('.cardD')

tabs[0].classList.remove('bg-white');
tabs[0].classList.add('bg-Negro');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('bg-Negro')) {
            tabs.forEach(tabr => {
                tabr.classList.remove('bg-Negro');
                
                if (!tabr.classList.contains('bg-white')){
                    tabr.classList.add('bg-white');
                }
            });
            tab.classList.add('bg-Negro');
            tab.classList.remove('bg-white');
        }
        let pos = index;

        formsUpdate(pos);

        
    });

});

function formsUpdate(pos){
    
    infos.forEach(info => {
        info.classList.remove('mostra');
        info.classList.add('ocultar');
    });  

    infos[pos].classList.add('mostra');
    infos[pos].classList.remove('ocultar');
}