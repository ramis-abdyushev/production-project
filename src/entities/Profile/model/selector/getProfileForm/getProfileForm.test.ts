import { getProfileForm } from './getProfileForm';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
  test('should work with filled state', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Belarus,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asd',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateSchema> = {
      profile: { form: data },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
