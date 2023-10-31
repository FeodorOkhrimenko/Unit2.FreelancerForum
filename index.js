// State
const names = ["Alice", "Bob", "Carol", "Jake", "Sofia", "Anna"];
const occupations = ["writer", "teacher", "programmer", "driver", "gardener", "designer"];
const prices = [30, 50, 70, 80, 20, 40];
const maxFreelancers = 10;
const freelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
    {name: "Carol", price: 70, occupation: "programmer"},
];

// adds a new freelancer every 3 seconds
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

// renders the initial state
render();

// renders the freelancer 
function render() {
    const newFreelancer = document.querySelector("#freelancers");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
        return element;
    });
   newFreelancer.replaceChildren(...freelancerElements); 

// render the average price

}   

// add a random freelancer to the `freelancers` array
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
    freelancers.push({ name, price, occupation});

    render();
} 

// get the average price of freelancers
function averagePrice() {

}

