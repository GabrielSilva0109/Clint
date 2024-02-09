import { connect } from 'react-redux'
import TasksList from '../components/TasksList'

const mapStateProsps = (state) => {
    return (
        tasks: state.tasks
    )
}

const TaskListContainer = connect(mapStateToProps)(TaskList);

export default TaskListContainer;