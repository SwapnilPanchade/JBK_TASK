import subprocess

# Get Wi-Fi profiles
command = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode('utf-8').split("\n")
profiles = [line.split(":")[1].strip() for line in command if "All User Profile" in line]

for profile in profiles:
    try:
        # Get the password for each profile
        results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', profile, 'key=clear']).decode('utf-8').split("\n")
        password_lines = [line.split(":")[1].strip() for line in results if "Key Content" in line]

        if password_lines:
            print("Wi-Fi Name: {:<30} Password: {}".format(profile, password_lines[0]))
        else:
            print("Wi-Fi Name: {:<30} Password: Not Found".format(profile))

    except subprocess.CalledProcessError:
        print("Could not retrieve details for Wi-Fi profile:", profile)