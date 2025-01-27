require 'swagger_helper'

RSpec.describe 'api/users', type: :request do
path '/users' do

    post 'Creates a user' do
        tags 'Users'
        consumes 'application/json'
        parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
            name: { type: :string, },
            email: { type: :string },
            address: { type: :string },
            phone: { type: :string },
            photo_url: { type: :string },
            job_type_id: { type: :string },
            shop_id: { type: :string },
            access_role_id: { type: :integer },
            shift_ids: { type: :array, items: { type: :integer } }
        },
        required: [ 'name', 'email', 'access_role_id' ]
        }

        response '201', 'User created' do
        let(:user) { { id: 1000, name: 'Duck Nukem', email: 'dukenuckum@example.com', access_role_id: 3, shift_ids: [1] } }
        run_test!
        end

        response '422', 'invalid request' do
        let(:user) { { name: 'Nike Dukem' } }
        run_test!
        end
    end

    get 'List users' do
        tags 'Users'
        consumes 'application/json'

        response '201', 'Users list' do
        let(:user) { { id: 1000, name: 'Duck Nukem', email: 'dukenuckum@example.com', access_role_id: 3 } }
        run_test!
        end
    end

    end

    path '/users/{id}' do

    get 'Retrieves a user' do
        tags 'Users'
        produces 'application/json', 'application/xml'
        parameter name: :id, in: :path, type: :string

        response '200', 'user found' do
        schema type: :object,
            properties: {
                id: {type: :integer },
                name: { type: :string, },
                email: { type: :string },
                address: { type: :string },
                phone: { type: :string },
                photo_url: { type: :string },
                shops: { type: :array, items: { type: :object, items: { type: :string } } }
            },
            required: [ 'id' ]

        let(:id) { User.create(id: 1000, name: 'Duck Nukem', email: 'dukenuckum@example.com', access_role_id: 3).id }
        run_test!
        end

        response '404', 'user not found' do
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
