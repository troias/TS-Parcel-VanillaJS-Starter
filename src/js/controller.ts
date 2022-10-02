const recipeContainer = document.querySelector('.recipe');

const timeout = function (s: number) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const recipeApi = 'https://forkify-api.herokuapp.com/api/v2/recipes';

export const getSingleRecipe = async (id: number) => {
  const req = await fetch(`${recipeApi}/${id}`);
  const data = await req.json();

  if (!req.ok) throw new Error(`${data.message} (${req.status})`);

  const { recipe } = data.data;
  return recipe;
};
