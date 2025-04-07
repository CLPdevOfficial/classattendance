document.addEventListener('DOMContentLoaded', function() {
    const attendanceForm = document.getElementById('attendanceForm');
    const actionInput = document.getElementById('actionInput');
    const exportExcelBtn = document.getElementById('exportExcelBtn');
    const studentSelect = document.getElementById('studentSelect');
    const attendanceTableBody = document.getElementById('attendanceTable').querySelector('tbody');

    studentSelect.addEventListener('change', function() {
        attendanceTableBody.innerHTML = '';
        Array.from(studentSelect.selectedOptions).forEach((option, index) => {
            const row = attendanceTableBody.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${option.value}</td>
                <td><input type="radio" name="attendance_${option.value}" value="P" checked></td>
                <td><input type="radio" name="attendance_${option.value}" value="A"></td>
            `;
        });
    });

    exportExcelBtn.addEventListener('click', function() {
        actionInput.value = 'export_excel';
        attendanceForm.submit();
    });
});