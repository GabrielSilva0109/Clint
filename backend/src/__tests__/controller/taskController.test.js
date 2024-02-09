import { getTasks, 
    getTaskById,
    createTask, 
    updateTask, 
    deleteTask } from "../../controllers/taskController.js";

describe('getTasks controller', () =>{
    it('Trazer todas as Tasks', () => {
        const mockRequest = {}
        const mockResponse = {
            json: jest.fn(),
            status: jest.fn(() => ({json: jest.fn()}))
        }

        getTasks(mockRequest, mockResponse)

        expect(mockResponse.json).toHaveBeenCalled()
        expect(mockResponse.status).toHaveBeenCalledWith(200)
    })
})