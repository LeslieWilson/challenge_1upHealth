class Api::V1::PatientInfoController < ApplicationController

  def index

    response = HTTP.auth("Bearer f738a6324d5a4d1197ce9fe8cf9fa833").get('https://api.1up.health/fhir/dstu2/Patient/d47f763e7c7f/$everything')

    render json: response.body
  end
end
