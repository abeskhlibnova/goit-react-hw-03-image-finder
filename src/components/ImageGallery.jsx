import { Component } from 'react';
import axios from 'axios';
import { fetchImages } from 'shares/api';
import Loader from './Loader/Loader';
import { ImageGalleryList } from './Allstyles.styled';

export default class ImageGallery extends Component {
    state = {
      images: [],
        loading: false,
        error: null,
        page: 1,
    }

    // componentDidMount() {
    //   const gallery = await fetchImages();
    //   this.setState({ gallery })
    // }
    // // componentDidUpdate(prevProps, prevState){

    // // }

    fetchImages() {
        // const { page } = this.state;
        this.setState({
            loading: true,
        });

        axios.get(
                `https://pixabay.com/api/?key=29337037-f6a5fd668b35f8f6ea13ad624&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`
            )
            .then(({data}) => {
                  this.setState((images) => {
                    return {
                        images: [...images, ...data.hits.id]
                    };
                })
            }
            
            )
            .catch(error => {
                this.setState({
                    error
                });
            })
            .finally(() =>
                this.setState({
                    loading: false,
                })
            );
    }

    loadMore = () => {
      this.setState(({page}) => {
        return{
          page: page + 1
        }
      })
    }

    render() {
        const { images, loading, error } = this.state;
        const isImages = Boolean(images.length);
        return (
            <div>
            {loading && <Loader />}
            {error && <p>Something wrong</p>}
            {/* {isImages && <ImageGalleryItem />} */}



              <ImageGalleryList>
                  <li>{images}</li>
              </ImageGalleryList>
            </div>
        );
    }
}
