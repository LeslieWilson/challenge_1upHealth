class Api::V1::PatientInfoController < ApplicationController

  def index
    authorizationToken ='authorization token goes here'
    response = HTTP.auth("Bearer #{authorizationToken}").get('https://api.1up.health/fhir/dstu2/Patient/f8fedcd9e6e5/$everything')
    render json: JSON.parse(response.to_s)
  end
end
