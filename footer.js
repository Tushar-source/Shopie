class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        
        

      
        <section class="credit col-12">
            <p>created by <span>mr. Tushar Developer</span>| all rights reserved!</p>
            <img src="images/card_img.png" alt="payments cards">
        </section>
     
        `
    }
}

customElements.define('my-footer',MyFooter)