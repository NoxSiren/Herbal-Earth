$(document).ready(function() {
	const recipeField = $('#recipeField');
	const addRecipeBtn = $("#addRecipeBtn");
	addRecipeBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('routes/api/dashboard', {
			task: recipeField.val(),
		});
		window.location.reload();
	});
});