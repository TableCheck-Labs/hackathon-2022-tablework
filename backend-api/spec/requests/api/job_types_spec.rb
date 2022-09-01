require 'swagger_helper'

RSpec.describe 'api/job_types', type: :request do
path '/job_types' do

    post 'Creates a job type' do
        tags 'JobTypes'
        consumes 'application/json'
        parameter name: :job_type, in: :body, schema: {
        type: :object,
        properties: {
            id: {type: :integer },
            name: { type: :string },
            code: { type: :string },
            light_color: { type: :string },
            dark_color: { type: :string },
            user_ids: { type: :array, items: { type: :integer } }
        },
        required: [ 'name', 'code' ]
        }

        response '201', 'Job type created' do
        let(:job_type) { { id: 1000, name: 'Cosmic Janitor', code: 'cosmic_janitor' } }
        run_test!
        end

        response '422', 'invalid request' do
        let(:job_type) { { code: 'a job' } }
        run_test!
        end
    end
    end

    path '/job_types/{id}' do

    get 'Retrieves a job type' do
        tags 'JobTypes'
        produces 'application/json', 'application/xml'
        parameter name: :id, in: :path, type: :string

        response '200', 'job type found' do
        schema type: :object,
            properties: {
                id: {type: :integer },
                name: { type: :string, },
                code: { type: :string },
                light_color: { type: :string },
                dark_color: { type: :string },
                users: { type: :array, items: { type: :object, items: { type: :string } } }
            },
            required: [ 'id' ]

        let(:id) { JobType.create(id: 1000, name: 'Cosmic Janitor', code: 'cosmic_janitor').id }
        run_test!
        end

        response '404', 'job type not found' do
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
