fetch('https://covid19.mathdro.id/api')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const global = document.querySelector('.global .data');
    const { confirmed, recovered, deaths, lastUpdate } = data;
    const html = `
  <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center">
  <div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-yellow-300 text-center">
	<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Confirmed</h2>
	<p class="text-5xl">🤢</p>
  <p class="text-5xl">${confirmed.value.toLocaleString()}</p>
  </div>
  <div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-green-300 text-center">
	<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Recovered</h2>
	<p class="text-5xl">👍🏾</p>
  <p class="text-5xl">${recovered.value.toLocaleString()}</p>
  </div>
    <div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-red-300 text-center">
	<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Deaths</h2>
	<p class="text-5xl">👼</p>
      <p class="text-5xl">${deaths.value.toLocaleString()}<span class="ml-2 text-lg">(${(
      (deaths.value / confirmed.value) *
      100
    ).toFixed(2)}%)</span></p>
      </div>
  </div>
  <div class="text-left my-4">
  <small>Last Update: ${lastUpdate}</small>
  </div>
  `;
    global.insertAdjacentHTML('beforeend', html);
  });

fetch('https://covid19.mathdro.id/api/confirmed')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const { confirmed, recovered, deaths } = data[31];
    const california = document.querySelector('.california .data');
    const html = `
		<div class="grid gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center">
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-yellow-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Confirmed</h2>
				<p class="text-5xl">🤢</p>
				<p class="text-5xl">${data[31].confirmed.toLocaleString()}</p>
			</div>
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-green-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Recovered</h2>
				<p class="text-5xl">👍🏾</p>
				<p class="text-5xl">${data[31].recovered.toLocaleString()}</p>
			</div>
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-red-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Deaths</h2>
				<p class="text-5xl">👼</p>
				<p class="text-5xl">${data[31].deaths.toLocaleString()}</p>
			</div>
		</div>
		<div class="text-left my-4">
			<small>Last Update: ${data[31].lastUpdate}</small>
		</div>
		`;
    california.insertAdjacentHTML('beforeend', html);
  });

fetch('https://covid19.mathdro.id/api/confirmed')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const { confirmed, recovered, deaths } = data[31];
    const illinois = document.querySelector('.illinois .data');
    const html = `
		<div class="grid gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center">
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-yellow-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Confirmed</h2>
				<p class="text-5xl">🤢</p>
				<p class="text-5xl">${data[81].confirmed.toLocaleString()}</p>
			</div>
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-green-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Recovered</h2>
				<p class="text-5xl">👍🏾</p>
				<p class="text-5xl">${data[81].recovered.toLocaleString()}</p>
			</div>
			<div class="shadow-lg rounded-lg p-5 hover:shadow-xl bg-red-300 text-center">
				<h2 class="uppercase text-lg font-bold text-xl tracking-normal pb-3">Deaths</h2>
				<p class="text-5xl">👼</p>
				<p class="text-5xl">${data[81].deaths.toLocaleString()}</p>
			</div>
		</div>
		<div class="text-left my-4">
			<small>Last Update: ${data[81].lastUpdate}</small>
		</div>
		`;
    illinois.insertAdjacentHTML('beforeend', html);
  });
