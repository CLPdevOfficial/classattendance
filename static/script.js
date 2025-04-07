document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = $('#studentSelect');
    const attendanceTableBody = document.getElementById('attendanceTable').querySelector('tbody');

    studentSelect.select2({
        width: '100%',
        placeholder: "Search and select students",
        allowClear: true
    });

    studentSelect.on('change', function() {
        attendanceTableBody.innerHTML = '';
        const selectedStudents = studentSelect.val();

        if (selectedStudents) {
            selectedStudents.forEach((student, index) => {
                const row = attendanceTableBody.insertRow();
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student}</td>
                    <td><input type="radio" name="attendance_${student}" value="P"></td>
                    <td><input type="radio" name="attendance_${student}" value="A" checked></td>
                    <td><button type="button" class="remove-btn" data-student="${student}">×</button></td>
                `;
            });

            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const studentToRemove = this.getAttribute('data-student');
                    let selectedValues = studentSelect.val();
                    selectedValues = selectedValues.filter(value => value !== studentToRemove);
                    studentSelect.val(selectedValues).trigger('change');
                });
            });
        }
    });

    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    document.getElementById('start_time').value = '07:00';
    document.getElementById('end_time').value = '09:00';

    document.getElementById('exportExcelBtn').addEventListener('click', function() {
        document.getElementById('actionInput').value = 'export_excel';
        document.getElementById('attendanceForm').submit();
    });
});document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = $('#studentSelect');
    const attendanceTableBody = document.getElementById('attendanceTable').querySelector('tbody');

    studentSelect.select2({
        width: '100%',
        placeholder: "Search and select students",
        allowClear: true,
        closeOnSelect: false 
    });

    studentSelect.on('change', function() {
        attendanceTableBody.innerHTML = '';
        const selectedStudents = studentSelect.val();

        if (selectedStudents) {
            selectedStudents.forEach((student, index) => {
                const row = attendanceTableBody.insertRow();
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student}</td>
                    <td><input type="radio" name="attendance_${student}" value="P"></td>
                    <td><input type="radio" name="attendance_${student}" value="A" checked></td>
                    <td><button type="button" class="remove-btn" data-student="${student}">×</button></td>
                `;
            });

            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const studentToRemove = this.getAttribute('data-student');
                    let selectedValues = studentSelect.val();
                    selectedValues = selectedValues.filter(value => value !== studentToRemove);
                    studentSelect.val(selectedValues).trigger('change');
                });
            });
        }
    });


    studentSelect.on('select2:select', function() {
        setTimeout(function() {
            $('.select2-search__field').focus();
        }, 100);
    });

    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    document.getElementById('start_time').value = '07:00';
    document.getElementById('end_time').value = '09:00';

    document.getElementById('exportExcelBtn').addEventListener('click', function() {
        const actionInput = document.getElementById('actionInput');
        if (!actionInput) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.id = 'actionInput';
            input.name = 'action';
            document.getElementById('attendanceForm').appendChild(input);
        }

        document.getElementById('actionInput').value = 'export_excel';
        document.getElementById('attendanceForm').submit();
    });
});
