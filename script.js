const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".center-card");

filters.forEach(function (filter)
{
	filter.addEventListener("click", function ()
	{
		const selected = filter.dataset.filter;

		filters.forEach(function (button)
		{
			button.classList.remove("active");
		});

		filter.classList.add("active");

		cards.forEach(function (card)
		{
			let visible;

			if (selected === "all")
			{
				visible = true;
			}
			else if (selected === "group")
			{
				visible = card.dataset.group === "inov";
			}
			else
			{
				visible = card.dataset.city === selected;
			}

			card.classList.toggle("hidden", !visible);
		});
	});
});
