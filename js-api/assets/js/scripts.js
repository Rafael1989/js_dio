const BASE_URL2 = 'https://api.agify.io/?name=';
const btn = document.getElementById('button')

const getPeople = async (value) => {
    const data = await fetch(BASE_URL2+value)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    return data;
};

const prever = async () => {
	const p = document.getElementById('input');
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const count = document.getElementById('count');
    const people = await getPeople(p.value);
    console.log(people);
	name.innerHTML = people.name;
    age.innerHTML = people.age;
    count.innerHTML = people.count;
};

btn.addEventListener('click', prever);
