class Api::V1::PatientInfoController < ApplicationController

  def index

    response = HTTP.auth("Bearer 7359d7ca6855487fa05eec214099d4f9").get('https://api.1up.health/fhir/dstu2/Patient/f8fedcd9e6e5/$everything')
    render json: JSON.parse(response.to_s)
  end
end
