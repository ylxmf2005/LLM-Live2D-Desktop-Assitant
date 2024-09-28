import os
from pydub import AudioSegment
import shutil
import json  # 导入 json 模块

def get_music_names(original_folder):
    music_names = []
    for filename in os.listdir(original_folder):
        if filename.endswith(".mp3") or filename.endswith(".wav"):  
            music_names.append(os.path.splitext(filename)[0])
    return music_names

def merge(converted_vocal_file_path, instrument_file_path, merged_file_path):
    if converted_vocal_file_path is None or instrument_file_path is None:
        print(f"Skipping merge, missing file: vocal: {converted_vocal_file_path}, instrument: {instrument_file_path}")
        return

    try:
        vocal = AudioSegment.from_file(converted_vocal_file_path)
        instrument = AudioSegment.from_file(instrument_file_path)

        combined = vocal.overlay(instrument)

        combined.export(merged_file_path, format="wav")
        print(f"Successfully merged: {merged_file_path}")
    except Exception as e:
        print(f"Error merging files {converted_vocal_file_path} and {instrument_file_path}: {e}")


def merge_all(original_folder = "./sing/original", 
              converted_vocal_folder = "./sing/converted_vocal", 
              vocal_folder = "./sing/vocal", 
              instrument_folder = "./sing/instrument",
              merged_folder = "./sing/merged",
              processed_file = "./sing/processed.json"):  

    if os.path.exists(processed_file):
        with open(processed_file, 'r', encoding='utf-8') as f:
            processed_names = json.load(f)
    else:
        processed_names = []

    music_names = get_music_names(original_folder)

    for music_name in music_names:
        if music_name in processed_names:
            print(f"Skipping already processed: {music_name}")
            continue

        converted_vocal_file_path = None
        vocal_file_path = None
        instrument_file_path = None
        standard_file_name = f"{music_name}.wav"

        for filename in os.listdir(vocal_folder):
            if f"_{music_name}." in filename:
                vocal_file_path = os.path.join(vocal_folder, filename)
                break

        for filename in os.listdir(converted_vocal_folder):
            if f"_{music_name}." in filename:
                converted_vocal_file_path = os.path.join(converted_vocal_folder, filename)
                break

        for filename in os.listdir(instrument_folder):
            if f"_{music_name}." in filename:
                instrument_file_path = os.path.join(instrument_folder, filename)
                break

        if vocal_file_path:
            new_vocal_file_path = os.path.join(vocal_folder, standard_file_name)
            os.rename(vocal_file_path, new_vocal_file_path)
            vocal_file_path = new_vocal_file_path

        if converted_vocal_file_path:
            new_converted_vocal_file_path = os.path.join(converted_vocal_folder, standard_file_name)
            os.rename(converted_vocal_file_path, new_converted_vocal_file_path)
            converted_vocal_file_path = new_converted_vocal_file_path

        if instrument_file_path:
            new_instrument_file_path = os.path.join(instrument_folder, standard_file_name)
            os.rename(instrument_file_path, new_instrument_file_path)
            instrument_file_path = new_instrument_file_path

        if converted_vocal_file_path is not None:
            merged_file_path = os.path.join(merged_folder, standard_file_name)
            merge(converted_vocal_file_path, instrument_file_path, merged_file_path)
        else:
            original_file_path = os.path.join(original_folder, f"{music_name}.mp3")
            merged_file_path = os.path.join(merged_folder, standard_file_name)
            original_audio = AudioSegment.from_file(original_file_path)
            original_audio.export(merged_file_path, format="wav")
            
            if vocal_file_path:
                converted_vocal_copy_path = os.path.join(converted_vocal_folder, standard_file_name)
                shutil.copyfile(vocal_file_path, converted_vocal_copy_path)

        processed_names.append(music_name)

        with open(processed_file, 'w', encoding='utf-8') as f:
            json.dump(processed_names, f, ensure_ascii=False, indent=4)

    print("All files processed.")

if __name__ == "__main__":
    merge_all()
