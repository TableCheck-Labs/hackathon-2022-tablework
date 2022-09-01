require 'swagger_helper'

RSpec.describe 'api/shops', type: :request do
path '/shops' do

    post 'Creates a shop' do
        tags 'Shops'
        consumes 'application/json'
        parameter name: :shop, in: :body, schema: {
        type: :object,
        properties: {
            id: {type: :integer },
            name: { type: :string, },
            description: { type: :string },
            user_ids: { type: :array, items: { type: :integer } }
        },

        required: [ 'id', 'name' ]
        }

        response '201', 'Shop created' do
        let(:shop) { { id: 1000, name: 'Yes! Udon', description: "Let's Udon!" } }
        run_test!
        end

        response '422', 'invalid request' do
        let(:shop) { { name: 'kon-ban-what' } }
        run_test!
        end
    end
    end

    path '/shops/{id}' do

    get 'Retrieves a shop' do
        tags 'Shops'
        produces 'application/json', 'application/xml'
        parameter name: :id, in: :path, type: :string

        response '200', 'shop found' do
        schema type: :object,
            properties: {
                id: {type: :integer },
                name: { type: :string, },
                description: { type: :string },
                shifts: { type: :array, items: { type: :object, items: { type: :string } } },
                users: { type: :array, items: { type: :object, items: { type: :string } } }
            },
            required: [ 'id' ]

        let(:id) { Shop.create(id: 1000, name: 'Yes! Udon', description: "Let's Udon!").id }
        run_test!
        end

        response '404', 'shop not found' do
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
