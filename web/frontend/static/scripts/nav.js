const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="frontend/static/images/logo.png" class="logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search">
                    <button class="search-btn">search</button>
                </div>
            <a href="#"><img src="{{url_for('static', filename='frontend/static/images/user.png') }}" alt=""></a>
                <a href="#"><img src="{{url_for('static', filename='frontend/static/images/shopping-cart.png') }}" alt=""></a>
            </div>
        </div>
        <ul class="links-container"> 
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="categorie" class="link">All Products</a></li>
        <li class="link-item"><a href="#" class="link">Samsung</a></li>
        <li class="link-item"><a href="#" class="link">Apple</a></li>
        <li class="link-item"><a href="#" class="link">OnePlus</a></li>
        <li class="link-item"><a href="#" class="link">Oppo</a></li>
        <li class="link-item"><a href="#" class="link">Nokia</a></li>
        <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>    
    `;
}

createNav();