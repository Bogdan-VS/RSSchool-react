export {};
// import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { CharacterResults } from '../../services/type';
// import { SingleCard } from './SingleCard';

// const card: CharacterResults = {
//   name: 'name',
//   id: 1,
//   status: 'status',
//   species: 'species',
//   gender: 'gender',
//   origin: {
//     name: 'name',
//     url: 'url',
//   },
//   image: 'image',
// };

// const { name, status, species, gender, origin } = card;

// const close = jest.fn();

// xdescribe(`test component "SingleCard"`, () => {
//   it('draw data component', () => {
//     render(<SingleCard card={card} close={close} />);

//     expect(screen.getByText(`Name: ${name}`)).toBeInTheDocument();
//     expect(screen.getByText(`Status: ${status}`)).toBeInTheDocument();
//     expect(screen.getByText(`Species: ${species}`)).toBeInTheDocument();
//     expect(screen.getByText(`Gender: ${gender}`)).toBeInTheDocument();
//     expect(screen.getByText(`Origin: ${origin?.name}`)).toBeInTheDocument();
//   });

//   it('closes overlay', () => {
//     render(<SingleCard card={card} close={close} />);

//     const button = screen.getByRole('button');

//     expect(close).not.toBeCalled();

//     userEvent.click(button);

//     expect(close).toBeCalled();
//   });
// });
