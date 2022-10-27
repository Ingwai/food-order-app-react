import { useEffect, useState } from 'react';

import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MeatItem/MealItem';

// const DUMMY_MEALS = [
// 	{
// 		id: 'p1',
// 		name: 'Placek po węgiersku',
// 		description: '300g',
// 		price: 28.0,
// 	},
// 	{
// 		id: 'p2',
// 		name: '1/2 placka po węgiersku',
// 		description: '150g',
// 		price: 18.0,
// 	},
// 	{
// 		id: 'p3',
// 		name: 'Placek ze szpinakiem i mozzarellą',
// 		description: '250g',
// 		price: 20.0,
// 	},
// 	{
// 		id: 'p4',
// 		name: 'Placek ziemniaczany w sosie kurkowym',
// 		description: '250g',
// 		price: 20.0,
// 	},
// 	{
// 		id: 'p5',
// 		name: 'Placek ziemniaczany w sosie borowikowym',
// 		description: '300g',
// 		price: 20.0,
// 	},
// 	{
// 		id: 'p6',
// 		name: 'Placki ziemniaczane 3 szt.',
// 		description: '200g',
// 		price: 11.0,
// 	},
// 	{
// 		id: 'n1',
// 		name: 'Naleśniki z serem',
// 		description: '250g',
// 		price: 16.0,
// 	},
// 	{
// 		id: 'n2',
// 		name: 'Naleśniki ze szpinakiem',
// 		description: '250g',
// 		price: 18.0,
// 	},
// 	{
// 		id: 'n3',
// 		name: 'Naleśniki z owocami',
// 		description: '250g',
// 		price: 16.0,
// 	},
// 	{
// 		id: 'r1',
// 		name: 'Dorsz panierowany',
// 		description: '100g',
// 		price: 17.0,
// 	},
// 	{
// 		id: 'r2',
// 		name: 'Dorsz saute',
// 		description: '100g',
// 		price: 17.0,
// 	},
// 	{
// 		id: 'r3',
// 		name: 'Dorsz zapiekany ze szpinakiem i serem mozzarella',
// 		description: '100g',
// 		price: 21.0,
// 	},
// 	{
// 		id: 's1',
// 		name: 'Sałatka Grecka',
// 		description: '300g',
// 		price: 24.0,
// 	},
// 	{
// 		id: 's2',
// 		name: 'Sałatka z łososiem',
// 		description: '300g',
// 		price: 26.0,
// 	},

// 	{
// 		id: 'dz1',
// 		name: 'Rosół dla dzieci',
// 		description: '200g',
// 		price: 8.0,
// 	},
// 	{
// 		id: 'dz2',
// 		name: 'Zupa pomidorowa dla dzieci',
// 		description: '200g',
// 		price: 9.0,
// 	},
// 	{
// 		id: 'dz3',
// 		name: 'Filet z kurczaka panierowany dla dzieci',
// 		description: '100g',
// 		price: 12.0,
// 	},
// 	{
// 		id: 'dz4',
// 		name: 'Nuggetsy 5 szt.',
// 		description: '-',
// 		price: 13.0,
// 	},
// 	{
// 		id: 'dz5',
// 		name: 'Placek ziemniaczany z cukrem pudrem 1 szt.',
// 		description: '-',
// 		price: 7.0,
// 	},
// 	{
// 		id: 'dz6',
// 		name: 'Naleśnik z serem dla dzieci 1 szt.',
// 		description: '-',
// 		price: 11.0,
// 	},
// 	{
// 		id: 'cns1',
// 		name: 'Tortilla drobiowa',
// 		description: '250g, filet grillowany, kapusta pekińska, pomidor, cebula czerwona, sosy',
// 		price: 18.0,
// 	},
// 	{
// 		id: 'cns2',
// 		name: 'Tortilla z nuggetsami',
// 		description: '250g, nuggetsy, boczek chrupiący, kapusta pekińska, pomidor, cebula czerwona, ogórek korniszon, sosy',
// 		price: 19.0,
// 	},
// 	{
// 		id: 'cns2',
// 		name: 'Shoarma z frytkami w zestawie',
// 		description: '450g, nuggetsy, boczek chrupiący, kapusta pekińska, pomidor, cebula czerwona, ogórek korniszon, sosy',
// 		price: 23.0,
// 	},
// 	{
// 		id: 'dod1',
// 		name: 'Ziemniaki z wody',
// 		description: '-',
// 		price: 6.0,
// 	},
// 	{
// 		id: 'dod2',
// 		name: 'Ziemniaki opiekane',
// 		description: '-',
// 		price: 8.0,
// 	},
// 	{
// 		id: 'dod3',
// 		name: 'Ryż',
// 		description: '-',
// 		price: 6.0,
// 	},
// 	{
// 		id: 'dod4',
// 		name: 'Kasza gryczana',
// 		description: '-',
// 		price: 6.0,
// 	},
// 	{
// 		id: 'dod5',
// 		name: 'Kasza pęczak',
// 		description: '-',
// 		price: 6.0,
// 	},
// 	{
// 		id: 'dod6',
// 		name: 'Warzywa na parze',
// 		description: '-',
// 		price: 11.0,
// 	},
// 	{
// 		id: 'dod7',
// 		name: 'Frytki',
// 		description: '-',
// 		price: 8.0,
// 	},
// 	{
// 		id: 'dod8',
// 		name: 'Szpinak',
// 		description: '-',
// 		price: 10.0,
// 	},
// 	{
// 		id: 'dod9',
// 		name: 'Surówka',
// 		description: '-',
// 		price: 5.0,
// 	},
// 	{
// 		id: 'dod10',
// 		name: 'Zestaw surówek',
// 		description: '-',
// 		price: 9.0,
// 	},
// 	{
// 		id: 'dod11',
// 		name: 'Pieczywo',
// 		description: '-',
// 		price: 1.0,
// 	},
// 	{
// 		id: 'dod12',
// 		name: 'Ketchup',
// 		description: '-',
// 		price: 1.0,
// 	},
// 	{
// 		id: 'dod13',
// 		name: 'Kopytka solo',
// 		description: '-',
// 		price: 14.0,
// 	},
// 	{
// 		id: 'dod14',
// 		name: 'Gulasz wieprzowy',
// 		description: '-',
// 		price: 17.0,
// 	},
// 	{
// 		id: 'dod15',
// 		name: 'Gulasz wołowy',
// 		description: '-',
// 		price: 20.0,
// 	},
// 	{
// 		id: 'dod16',
// 		name: 'Kluski śląskie',
// 		description: '-',
// 		price: 14.0,
// 	},
// 	{
// 		id: 'sn1',
// 		name: 'Jajecznica chłopska z 3 jaj',
// 		description: '150g',
// 		price: 14.0,
// 	},
// 	{
// 		id: 'sn2',
// 		name: 'Jajecznica na pomidorach z 3 jaj',
// 		description: '200g',
// 		price: 13.0,
// 	},
// 	{
// 		id: 'sn3',
// 		name: 'Jajecznica na szpinaku z 3 jaj',
// 		description: '250g',
// 		price: 13.0,
// 	},
// 	{
// 		id: 'sn4',
// 		name: 'Jajecznica na maśle z 3 jaj',
// 		description: '150g',
// 		price: 12.0,
// 	},
// ];

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();
	// w useEffect nie możemy użyć funkcji asynhronicznej dlatego użyjemy funkcji sychronicznej a w niej dopiero async/
	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://react-http-test-c2246-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const responseData = await response.json();
			const loadedMeals = [];
			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};
		fetchMeals().catch(error => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.mealsloading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.mealserror}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealsList = meals.map(meal => (
		<MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
