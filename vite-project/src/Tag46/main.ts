interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

class Store {
  private products: Product[] = [];
  private filteredProducts: Product[] = [];

  constructor() {
    this.initializeStore();
  }

  private async initializeStore(): Promise<void> {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      this.products = await response.json();
      this.filteredProducts = [...this.products];
      this.renderProducts();
      this.setupEventListeners();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  private setupEventListeners(): void {
    const searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const sortSelect = document.getElementById(
      "sortSelect"
    ) as HTMLSelectElement;
    const filterButtons = document.querySelectorAll(".filter-btn");

    searchInput.addEventListener("input", () =>
      this.handleSearch(searchInput.value)
    );
    sortSelect.addEventListener("change", () =>
      this.handleSort(sortSelect.value)
    );
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = (e.target as HTMLElement).dataset.category;
        if (category) this.handleFilter(category);
      });
    });
  }

  private handleSearch(searchTerm: string): void {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.renderProducts();
  }

  private handleSort(sortDirection: string): void {
    this.filteredProducts.sort((a, b) => {
      return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
    });
    this.renderProducts();
  }

  private handleFilter(category: string): void {
    this.filteredProducts = this.products.filter(
      (product) => product.category === category
    );
    this.renderProducts();
  }

  private renderProducts(): void {
    const productsContainer = document.getElementById("products-grid");
    if (!productsContainer) return;

    productsContainer.innerHTML = this.filteredProducts
      .map((product) => this.createProductCard(product))
      .join("");
  }

  private createProductCard(product: Product): string {
    return `
          <div class="product-card">
              <img src="${product.image}" alt="${product.title}">
              <h3 class="product-title">${product.title}</h3>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              <button class="add-to-cart" data-id="${
                product.id
              }">Add to Cart</button>
          </div>
      `;
  }
}

new Store();
