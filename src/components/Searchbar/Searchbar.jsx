import { Component } from 'react';
import {
    SearchbarWrapper,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
} from './Searchbar.styled';
import IconButton from 'components/Button/Button';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

export default class Searchbar extends Component {
    state = {
        search: '',
    };
    render() {
        return (
            <SearchbarWrapper>
                <SearchForm>
                    <SearchFormButton>
                        <IconButton />
                        <SearchIcon width="40" height="40" fill="#3f51b5" />
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchbarWrapper>
        );
    }
}

{
    /* <header className="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header> */
}
