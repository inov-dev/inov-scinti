const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".center-card");

filters.forEach(function (filter)
{
	filter.addEventListener("click", function ()
	{
		const city = filter.dataset.city;

		filters.forEach(function (button)
		{
			button.classList.remove("active");
		});

		filter.classList.add("active");

		cards.forEach(function (card)
		{
			if (city === "all" || card.dataset.city === city)
			{
				card.classList.remove("hidden");
			}
			else
			{
				card.classList.add("hidden");
			}
		});
	});
});
