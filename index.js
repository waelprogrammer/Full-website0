fetch('https://web0-mq2x.onrender.com/services')
  .then(response => response.json())
  .then(data => {
    let services = document.getElementById('services');

    data.forEach(element => {
      let content = ` 
                <i class="${element.icon}"></i>
                <h4><a href="" class="stretched-link">${element.title}</a></h4>
                <p>${element.text}</p>
              </div><!-- Icon-Box -->`;
      let e = document.createElement('div');
      e.innerHTML = content;
      e.classList.add('col-md-6', 'icon-box', 'position-relative');
      services.appendChild(e);
    });
  })


// kel section bel site be3mela sheet 5as fiya w be3mel yalli be3emlo



fetch('https://web0-mq2x.onrender.com/services1')
  .then(response => response.json())
  .then(data => {
    let content2 = document.getElementById('content2');

    data.forEach(element1 => {
      let content1 = ` 
                
            <div class="icon flex-shrink-0"><i class="${element1.icon}"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">${element1.title}</a></h4>
              <p class="description">${element1.text}</p>
            </div>
          `;
      let e1 = document.createElement('div');
      e1.innerHTML = content1;
      e1.classList.add('col-lg-4', 'col-md-6', 'service-item', 'd-flex');
      e1.setAttribute('data-aos', 'fade-up');
      e1.setAttribute('data-aos-delay', '100');
      content2.appendChild(e1);
    });
  })