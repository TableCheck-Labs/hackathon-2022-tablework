require 'swagger_helper'

RSpec.describe 'api/shifts', type: :request do
path '/shifts' do

    post 'Creates a shift' do
        tags 'Shifts'
        consumes 'application/json'
        parameter name: :shift, in: :body, schema: {
        type: :object,
        properties: {
            name: { type: :string, },
            description: { type: :string },
            department: { type: :string },
            color: { type: :string },
            startTime: { type: :string },
            endTime: { type: :string },
            user_id: { type: :string },
            shop_id: { type: :string } 
        },

        required: [ 'name', 'startTime', 'endTime', 'user_id', 'shop_id' ]
        }

        response '201', 'Shift created' do
        let(:shift) { { id: 1000, name: 'Summer Shift', description: '', user_id: 1000, shop_id: 1000 } }
        run_test!
        end

        response '422', 'invalid request' do
        let(:shift) { { name: 'kon-niche-vo' } }
        run_test!
        end
    end

    get 'List shifts' do
        tags 'Shifts'
        consumes 'application/json'

        response '201', 'Shifts list' do
        let(:shift) { { id: 1000, name: 'Summer Shift', description: '', user_id: 1000, shop_id: 1000 } }
        run_test!
        end
    end

    end

    path '/shifts/{id}' do

    get 'Retrieves a shift' do
        tags 'Shifts'
        produces 'application/json', 'application/xml'
        parameter name: :id, in: :path, type: :string

        response '200', 'shift found' do
        schema type: :object,
            properties: {
                id: {type: :integer },
                name: { type: :string, },
                description: { type: :string },
                department: { type: :string },
                color: { type: :string },
                startTime: { type: :string },
                endTime: { type: :string },
                user_id: { type: :string },
                shop_id: { type: :string } 
            },
            required: [ 'id' ]

        let(:id) { Shift.create(id: 1000, name: 'Summer Shift', description: '', user_id: 1000, shop_id: 1000).id }
        run_test!
        end

        response '404', 'shift not found' do
        let(:id) { 'invalid' }
        run_test!
        end

        response '406', 'unsupported accept header' do
        let(:'Accept') { 'application/foo' }
        run_test!
        end
    end
    end
end
