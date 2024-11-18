function abrirmodal(){
      const modal = document.getElementById('janela-modal') 
      const cabeçalho = document.getElementById('cabeçalho');
      modal.classList.add('abrir')
      cabeçalho.classList.add('desfoque');
      
      modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
            cabeçalho.classList.remove('desfoque');
        }
      })
}