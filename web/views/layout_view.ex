defmodule Timeline.LayoutView do
  use Timeline.Web, :view

  def notifications?(conn) do
    Map.size(get_flash(conn)) > 0
  end

  def info?(conn) do
    String.length(get_flash(conn, :info)) > 0
  end

  def error?(conn) do
    String.length(get_flash(conn, :info)) > 0
  end
end
