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
    const freelancer = document.querySelector("#freelancers");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
        return element;
    });
   freelancer.replaceChildren(...freelancerElements); 
}

// add a random freelancer to the `freelancers` array
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.lenth)];
    const occupation = occupations[Math.floor(Math.random() * occupations.lenth)];
    const price = prices[Math.floor(Math.random() * prices.lenth)];
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
    freelancers.push({ name, occupation, price});

    render();
} 

