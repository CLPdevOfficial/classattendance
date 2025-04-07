# Class Attendance System

This is a simple web application built with Flask for managing and exporting class attendance records. It allows you to select students, mark their attendance, and export the data to an Excel file.

## Features

*   **Student Selection:** Easily select students from a predefined list.
*   **Attendance Marking:** Mark students as Present (P) or Absent (A).
*   **Excel Export:** Export attendance records to a well-formatted Excel file.
*   **User-Friendly Interface:** A clean and intuitive interface for easy navigation.
*   **Class and Subject Input:** Customizable fields for class name, subject, date, and time.

## Technologies Used

*   **Flask:** A lightweight Python web framework.
*   **Openpyxl:** A Python library for reading and writing Excel files.
*   **HTML/CSS:** For the user interface.
*   **JavaScript:** Enhanced user experience

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Create a Virtual Environment (Recommended):**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS
    venv\Scripts\activate  # On Windows
    ```

3.  **Install Dependencies:**

    ```bash
    pip install flask openpyxl
    ```

4.  **Run the Application:**

    ```bash
    python classattendace/main.py
    ```

    This will start the Flask development server. Open your web browser and navigate to `http://0.0.0.0:8080/`.

## Usage

1.  **Enter Class and Subject Details:** Provide the class name, subject, date, start time, and end time.
2.  **Select Students:** Choose the students from the list. The selected students will appear in the attendance table.
3.  **Mark Attendance:** For each student in the table, select either "Present" or "Absent".
4.  **Export to Excel:** Click the "Export to Excel" button to download the attendance record as an Excel file.

## Code Structure

*   `classattendace/main.py`:  The main Flask application file containing the routes, logic for handling form submissions, and the Excel export function.
*   `classattendace/src/index.html`:  The HTML template for the main page where you input class details, select students, and mark attendance.
*   `classattendace/src/attendance.html`: The HTML template displaying the confirmed attendance record.
*   `classattendace/static/style.css`:  The CSS file for styling the application.
*   `classattendace/static/astyle.css`: Extra CSS styling for general elements.
*   `excel_exports/`: This directory is automatically created to store the exported Excel files.

## Customization

*   **Student List:**  Modify the `students` list in `classattendace/main.py` to reflect the actual students in your class.
*   **Class List:**  Modify the `classes` list in `classattendace/main.py` to update available classes.
*   **Styling:**  Customize the appearance of the application by modifying the CSS in `classattendace/static/style.css`.

## Excel File Format

The exported Excel file will have the following format:

*   **Sheet Name:** Attendance
*   **Headers:** "No.", "Student Name", "Present", "Absent"
*   **Data:** Each row represents a student with their attendance status.
*   **Formatting:** Basic formatting is applied, including font styles, borders, and alignment.

## Example

1.  Enter "10 ជ", "Math", "2024-10-27", "08:00", "09:00".
2.  Select "ខាន់ សិរីណុង" and "ខឿន សារ៉ា".
3.  Mark "ខាន់ សិរីណុង" as "Present" and "ខឿន សារ៉ា" as "Absent".
4.  Click "Export to Excel".  A file named `Attendance_10_ជ_Math_20241027.xlsx` will be downloaded.

## Future Enhancements

*   **Database Integration:** Store attendance data in a database for persistent storage and retrieval.
*   **User Authentication:** Implement user accounts and login functionality.
*   **Report Generation:** Generate various attendance reports.
*   **Graphical Interface:** Improve the UI with a more modern look and feel.
*   **Attendance Marking:**  Enable attendance marking directly from the attendance table, without needing to resubmit the form.

## License

[MIT License](LICENSE) 
