#Configure Store
import {Provider} from 'react-redux'
import store from './store/store'
in Appjs

Wrap Appcontainer in Provider and pass store as property in Provider


#Configure Component you want to use store in

import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    posts: state.counterReducer.posts
})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => {
        fetchPosts().then(data => { dispatch(data) }).catch(err => console.log(err))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)


#usage of store in Component 
use posts,fetchPosts
as this.props.post, this.props.fetchPosts


