defmodule Timeline.PageController do
  use Timeline.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
