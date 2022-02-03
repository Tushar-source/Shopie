class MyHeader extends HTMLElement
{
    ConnectedCallback(){
    this.innerHTML = 
        <header class="header">
            <a href="index.html" class="logo"><i class="fas fa-store"></i>Shopie</a>
            <form action="" class="search-form">
                <input type="search" id="search-box" placeholder="Search here..."></input>
                <label for="search-box" class="fas fa-search"></label>
            </form>
            <div class="icons">
                <div id="menu_btn" class="fas fa-bars"  onclick="openNav()"></div>
                
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="login.html"><i class="fas fa-user"></i></a>
                <a href="cart.html"><i class="fas fa-shopping-cart cart"><span class="badge badge-warning">0</span></i></a>
            </div>
        </header>
    }
}
customElements.define('my-header' , MyHeader)