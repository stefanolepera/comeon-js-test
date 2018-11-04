import React from 'react';
import GameItem from './GameItem';
import Category from './Category';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames, getAllCategories } from '../../../actions/postAction';

class Content extends React.Component {
    componentDidMount() {
        this.props.getAllGames();
        this.props.getAllCategories();
    }

    render() {
        let filteredGames;
        filteredGames = this.props.games.filter(
            game => game.categoryIds.indexOf(this.props.currentCategory) !== -1
        );

        if (this.props.searchGame.length > 0) {
            filteredGames = this.props.games.filter(
                game =>
                    game.name
                        .toLowerCase()
                        .search(this.props.searchGame.toLowerCase()) !== -1
            );
        }

        return (
            <div className="ui grid">
                <div className="twelve wide column">
                    <h3 className="ui dividing header">Games</h3>
                    {!filteredGames.length && (
                        <div className="content">
                            <h3 className="header">No Match Found</h3>
                        </div>
                    )}
                    {filteredGames.map(game => (
                        <GameItem key={game.code} game={game} />
                    ))}
                </div>
                <div className="four wide column">
                    <h3 className="ui dividing header">Categories</h3>
                    {this.props.categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    games: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.number.isRequired,
    searchGame: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    games: state.content.games,
    categories: state.content.categories,
    currentCategory: state.filter.categoryIndex,
    searchGame: state.filter.gameName
});

export default connect(
    mapStateToProps,
    { getAllGames, getAllCategories }
)(Content);
