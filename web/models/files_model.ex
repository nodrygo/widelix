defmodule Widelix.FilesModel do

  def getAllFiles(user \\"demo") do
    base_path =  Application.get_all_env(:widelix)[:files][:basePath]
    for f <- File.ls! Path.join(base_path,user) do
        IO.puts "File is #{f}"
        f
    end
  end


end