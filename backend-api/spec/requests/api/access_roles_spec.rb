require 'swagger_helper'

RSpec.describe 'api/access_roles', type: :request do
path '/access_roles' do

    post 'Creates an access_role' do
        tags 'AccessRoles'
        consumes 'application/json'
        parameter name: :access_role, in: :body, schema: {
        type: :object,
        properties: {
            id: {type: :integer },
            name: { type: :string, },
            rid: { type: :string, },
            user_ids: { type: :array, items: { type: :integer } }
        },
        required: [ 'name', 'rid' ]
        }

        response '201', 'Access Role created' do
        let(:access_role) { { id: 1000, name: 'Super Role', rid: 'super_role' } }
        run_test!
        end

        response '422', 'invalid request' do
        let(:access_role) { { rid: 'a role' } }
        run_test!
        end
    end
    end

    path '/access_roles/{id}' do

    get 'Retrieves an access role' do
        tags 'AccessRoles'
        produces 'application/json', 'application/xml'
        parameter name: :id, in: :path, type: :string

        response '200', 'access role found' do
        schema type: :object,
            properties: {
                id: {type: :integer },
                name: { type: :string, },
                rid: { type: :string },
                users: { type: :array, items: { type: :object, items: { type: :string } } }
            },
            required: [ 'id' ]

        let(:id) { AccessRole.create(id: 1000, name: 'Super Role', rid: 'super_role').id }
        run_test!
        end

        response '404', 'access role not found' do
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
