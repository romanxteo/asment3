function handlesubmit() {
    // lay gia tri input
    const emailvalue = document.getElementById('email').value.toLowerCase();
  
    // lay cac phan tu cua thẻ error
    const error = document.getElementById('error');
  
    // điều kiện để là một email
    const checkemail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    // dùng match để kiểm tra email
    const check = emailvalue.match(checkemail);
  
    // lay phan chua thong tin
    const sectionContent = document.querySelector('.section-content');
    console.log('check section', sectionContent);
  
    // lay cac element de kiem soat nhap
    const submitcontrol = document.querySelector('.submit-email');
  
    if (check) {
      sectionContent.style.display = 'block';
      submitcontrol.style.display = 'none';
      error.innerHTML = '';
    } else {
      error.innerHTML = 'Nhập lại';
    }
  }
  


  function handleonmouseover(element) {
    const viewmore = element.querySelector('.control-view')
    viewmore.style.display='inline-block';
  }


  function handleonmouseout(element){
    const viewmore = element.querySelector('.control-view')
    viewmore.style.display = 'none';
    if(!viewmore.classList.value.includes('less-more'))
    {
      viewmore.style.display='none';
    }
  }
function handleviewmore(element){
  const parentelement = element.closest('.parent');
  const viewmore = parentelement.querySelector('.control-view');
  console.log(viewmore.innerHTML);
  const sectioncontrol=parentelement.querySelectorAll('.content')
  if(viewmore.classList.value.includes('view-more'))
  {
    sectioncontrol.forEach(element => {
      element.style.display = 'block';
    });
    viewmore.classList.remove('view-more')
    viewmore.classList.add('less-more')
    viewmore.innerHTML = 'Less More'
  } else {
    sectioncontrol.forEach(element => {
      element.style.display = 'none';
    });
    viewmore.classList.remove('less-more')
    viewmore.classList.add('view-more')
    viewmore.innerHTML = 'View More'
  }
}
  